import { UI } from './ui.js';
export class Notebook {
    constructor() {
        this.ui = new UI();
    }
    /**
     * Retrieves entries from local DB
     */
    getEntries(){
        const retrieve = window.indexedDB.open('entries')
        retrieve.onsuccess = (event) => {
            this.entries.result = retrieve.result
        }
        retrieve.onerror = (event) => {
            console.error('Error retrieving entries')
        }
    }
    /**
     * Adds an entry to the notebook
     * @param {Object} entry
     */
    addEntry(entry) {
        this.entries.add(entry)
    }
    /**
     * Removes an entry from the notebook
     * @param {Object} entry
     */
    removeEntry(entry) {
        this.entries.remove(entry)
    }
    /**
     * Updates an entry in the notebook
     * @param {Object} entry
     */
    updateEntry(entry) {

        // const id = entry.id,
        //       current = this.entries.filter( e => e.id === id)
        // if (current.length === 0) {
        //     console.error('Entry not found')
        //     return
        // }


        this.entries.update(entry)
    }

    getEntry(entry) {
        return this.entries.get(entry)
    }

}
