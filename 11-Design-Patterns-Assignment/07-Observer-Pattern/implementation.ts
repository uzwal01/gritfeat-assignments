// Observer Interface
export interface Observer {
    update(news: string): void;
}

// Subject interface
export interface Subject {
    addObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(): void;
}

// Concrete Observer
export class NewsChannel implements Observer {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    update(news: string): void {
        console.log(`[${this.name}] Breaking News: ${news}`);
    }
}

// Concrete Subject
export class NewsAgency implements Subject {
    private observers: Observer[] = [];
    private latestNews: string = "";

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        this.observers = this.observers.filter((obs) => obs !== observer);
    }

    publishNews(news: string): void {
        this.latestNews = news;
        this.notifyObservers();
    }

    notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update(this.latestNews);
        }
    }
}
