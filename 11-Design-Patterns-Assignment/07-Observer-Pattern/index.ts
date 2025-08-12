import { NewsAgency, NewsChannel } from "./implementation";

// Create a news agency
const agency = new NewsAgency();

// Create Channels
const cnn = new NewsChannel('CNN');
const bbc = new NewsChannel('BBC');
const espn = new NewsChannel('ESPN');

// Subscribe Channels
agency.addObserver(cnn);
agency.addObserver(bbc);
agency.addObserver(espn);

// Publish news
agency.publishNews("Earthquake in Russia!");

// Remove a channel
agency.removeObserver(espn);

// Publish another news
agency.publishNews("Stock markets hit a record high!");

