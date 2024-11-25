import { notFound } from 'next/navigation';
import { RedirectToast } from '@/components/redirect-toast';
import { TicketItem } from '@/features/ticket/components/ticket-item';
import { getTicket } from '@/features/ticket/queries/get-ticket';

type TicketPageProps = {
  params: Promise<{ ticketId: string }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;
  const ticket = await getTicket(ticketId);

  if (!ticket) {
    notFound();
  }

  return (
    <>
      <div className="flex animate-fade-from-top justify-center">
        <TicketItem ticket={ticket} isDetail />
      </div>
      <RedirectToast />
    </>
  );
};

export default TicketPage;
