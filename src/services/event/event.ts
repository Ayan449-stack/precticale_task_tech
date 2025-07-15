import {EventItem} from '../../state/event/types';
import {handleApiResponse} from '../../utilities/Utils';
import {eventInstance} from '../event/instance';

interface EventListResponse {
  success: boolean;
  message: string;
  data: {
    events: EventItem[];
  };
}

export const getEventsAPI = async (): Promise<EventItem[]> => {
  const response: EventListResponse = await handleApiResponse(
    eventInstance.post('events-listing', {}),
  );
  return response.data.events; // ✅ only return events array
};
