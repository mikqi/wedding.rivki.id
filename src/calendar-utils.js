const MS_IN_MINUTES = 60 * 1000;

const formatTime = function(date) {
  return date.toISOString().replace(/-|:|\.\d+/g, '');
};

const calculateEndTime = function({ end, start, duration }) {
  return end ?
    formatTime(end) :
    formatTime(new Date(start.getTime() + (duration * MS_IN_MINUTES)));
};

export default {
  ics: function({ start, end, title, address, description, duration }) {
    const startTime = formatTime(start);
    const endTime = calculateEndTime({ end, start, duration });

    const href = encodeURI(
      'data:text/calendar;charset=utf8,' + [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'BEGIN:VEVENT',
        'URL:' + document.URL,
        'DTSTART:' + (startTime || ''),
        'DTEND:' + (endTime || ''),
        'SUMMARY:' + (title || ''),
        'DESCRIPTION:' + (description || ''),
        'LOCATION:' + (address || ''),
        'END:VEVENT',
        'END:VCALENDAR'].join('\n'));

    return href
  }
}
