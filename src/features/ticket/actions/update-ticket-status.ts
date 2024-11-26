'use server';

import { revalidatePath } from 'next/cache';
import { fromErrorToActionState, toActionState } from '@/components/form/utils/to-action-state';
import { prisma } from '@/lib/prisma';
import { ticketsPath } from '@/paths';
import type { TicketStatus } from '@prisma/client';

export const updateTicketStatus = async (id: string, status: TicketStatus) => {
  // intoduce sever lag
  await new Promise(resolve => setTimeout(resolve, 1000));

  try {
    await prisma.ticket.update({
      where: {
        id,
      },
      data: {
        status,
      },
    });
  } catch (error) {
    return fromErrorToActionState(error);
  }
  revalidatePath(ticketsPath());

  return toActionState('SUCCESS', 'Status updated');
};
