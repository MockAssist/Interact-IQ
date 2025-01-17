"use server";

import { prisma } from "../libs/prismadb";
import getCurrentUser from "./getCurrentUser";

const GetAllChats = async () => {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      console.log("No currentUser found in GetAllChats.");
      return null;
    }

    const allChats = await prisma.chat.findMany({
      where: {
        userId: {
          equals: currentUser.id,
        },
      },
    });

    // console.log(allChats);
    return allChats;
  } catch (error: any) {
    return null;
  }
};

export default GetAllChats;
