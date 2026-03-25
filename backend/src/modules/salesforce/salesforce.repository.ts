import { prisma } from "../../shared/lib/prisma.js";

export class SalesforceRepository {
  updateContactId = async (userId: string, contactId: string) => {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { contactId },
    });

    return updatedUser;
  };
}

export const salesforceRepository = new SalesforceRepository();
