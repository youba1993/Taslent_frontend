import { Button, Card } from "react-bootstrap";
import moment from "moment";


const EventCard = ({ event }) => {
    const { eventTitle, eventDate, eventDescription } = event;

    const handleAddToCalendar = (eventName, eventDate) => {
        const eventStartDate = new Date(eventDate);
        const eventEndDate = new Date(eventStartDate.getTime() + 60 * 60 * 1000);

        const event = {
            title: eventName,
            start: eventStartDate,
            end: eventEndDate,
            allDay: false,
        };

        const startDateTime = moment(event.start).utc().format("YYYYMMDDTHHmmss[Z]");
        const endDateTime = moment(event.end).utc().format("YYYYMMDDTHHmmss[Z]");

        const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${event.title}&dates=${startDateTime}/${endDateTime}`;

        const newTab = window.open(calendarUrl, "_blank");

        if (!newTab || newTab.closed || typeof newTab.closed == "undefined") {
            alert("Please allow pop-ups for this website to add the event to your calendar.");
        }
    };

    return (
        <Card className="mb-3 event-card">
            <Card.Body>
                <Card.Title className="event-title">
                    {eventTitle}
                </Card.Title>
                <Card.Subtitle
                    className="mb-2 text-muted "
                >
                    {moment(eventDate).format("dddd, MMMM Do YYYY, h:mm A")}
                </Card.Subtitle>
                <Card.Text>
                    {eventDescription}
                </Card.Text>
                <Button
                    variant="info"
                    onClick={() => handleAddToCalendar(eventTitle, eventDate)}
                >
                    Add to Calendar
                </Button>
            </Card.Body>
        </Card>

    );
};

export default EventCard;
