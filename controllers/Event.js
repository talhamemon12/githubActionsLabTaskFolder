function isValidEvent(event) {
  // Check required fields
  if (!event.name || !event.date || !event.category) {
    return { valid: false, message: "Missing required event fields" };
  }

  const eventDate = new Date(event.date);
  if (isNaN(eventDate.getTime())) {
    return { valid: false, message: "Invalid date format" };
  }

  // Normalize both dates (ignore time)
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  eventDate.setHours(0, 0, 0, 0);

  // ❌ Disallow past events
  if (eventDate < today) {
    return { valid: false, message: "Event date cannot be in the past" };
  }

  return { valid: true, message: "Event is valid" };
}

module.exports = { isValidEvent };

