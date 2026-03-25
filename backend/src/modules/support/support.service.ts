import { ENV } from "../../shared/constants/env.js";
import { prisma } from "../../shared/lib/prisma.js";
import {
  InventoriesRepository,
  inventoriesRepository,
} from "../inventories/inventories.repository.js";
import { accessTokenSchema } from "./schemas/accessTokenSchema.js";
import type { ReportDto } from "./types/ReportDto.js";

export class SupportService {
  private repository: InventoriesRepository;

  constructor(repository: InventoriesRepository) {
    this.repository = repository;
  }

  createReport = async ({
    reportedBy,
    inventoryId,
    currentLink,
    priority,
    summary,
  }: ReportDto) => {
    const inventoryData = inventoryId
      ? await this.repository.getInventoryById(inventoryId)
      : null;
    const admins = await prisma.user.findMany({
      where: { type: "admin" },
      select: { email: true },
    });
    const inventoryName = inventoryData?.title ?? null;
    const ticket = {
      reported_by: reportedBy,
      inventory: inventoryName,
      link: currentLink,
      priority: priority,
      summary: summary,
      admin_emails: admins.map((a) => a.email),
    };
    const json = JSON.stringify(ticket, null, 2);
    const filename = `ticket_${new Date().toISOString().replace(/[:.]/g, "-")}_${Math.random().toString(36).slice(2, 7)}.json`;
    this.uploadReport({ json, filename });
    return { ticket, json, filename };
  };

  getAccessToken = async () => {
    const response = await fetch("https://api.dropbox.com/oauth2/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: ENV.DROPBOX_TOKEN,
        client_id: ENV.DROPBOX_CLIENT,
        client_secret: ENV.DROPBOX_SECRET,
      }),
    });
    if (!response.ok) {
      throw new Error("Failed to refresh Dropbox token");
    }

    const data = await response.json();
    const typedData = accessTokenSchema.parse(data);
    return typedData.access_token;
  };

  async uploadReport({ json, filename }: { json: string; filename: string }) {
    const accessToken = await this.getAccessToken();
    const response = await fetch(
      "https://content.dropboxapi.com/2/files/upload",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Dropbox-API-Arg": JSON.stringify({
            path: `/tickets/${filename}`,
            mode: "add",
            autorename: true,
          }),
          "Content-Type": "application/octet-stream",
        },
        body: json,
      },
    );

    if (!response.ok) {
      throw new Error("Failed to upload data to dropbox");
    }
  }
}

export const supportService = new SupportService(inventoriesRepository);
