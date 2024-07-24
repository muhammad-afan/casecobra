"use server";

import { db } from "@/db";

export type SaveConfigArgs = {
  color: string;
  finish: string;
  material: string;
  model: string;
  configId: string;
};

export async function saveConfig({
  color,
  finish,
  material,
  model,
  configId,
}: SaveConfigArgs) {
  await db.configuration.update({
    where: { id: configId },
    data: {
      color,
      finish,
      material,
      model,
    },
  });
}
