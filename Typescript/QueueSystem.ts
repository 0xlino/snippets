class QueueItem {
    constructor(
        public task: () => void,
        public scheduledTime: number
    ) { }
}

/**
 * Represents a queue of tasks to be executed at a scheduled time.
 */
class Queue {
    private items: QueueItem[] = [];

    /**
     * Adds a new task to the queue with a scheduled time.
     * @param task - The task to be executed.
     * @param scheduledTime - The time at which the task should be executed.
     */
    enqueue(task: () => void, scheduledTime: number) {
        const newItem = new QueueItem(task, scheduledTime);
        this.items.push(newItem);
        this.items.sort((a, b) => a.scheduledTime - b.scheduledTime);
    }

    /**
     * Runs all tasks in the queue that are scheduled to be executed at or before the current time.
     */
    run() {
        const now = Date.now();
        while (this.items.length > 0 && this.items[0].scheduledTime <= now) {
            console.log(`Running tasks this.items.length: ${this.items.length}`);
            const item = this.items.shift();
            if (item) {
                item.task();
            }
        }
    }
}

// Usage example:
const myQueue = new Queue();

let timeIncrement = 1000;
const addManyTasks = (count: number, func:any, time: any) => {
    for (let i = 0; i < count; i++) {
        myQueue.enqueue(() => {
            // console.log(`Task ${i} executed at ${new Date()}`);
            console.log(time);
            timeIncrement += 1000;
            func(i);
            
        }, Date.now() + i * time);
    }
}

export default Queue;
export { QueueItem, addManyTasks };