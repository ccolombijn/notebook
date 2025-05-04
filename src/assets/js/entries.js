export class Entries {
    constructor() {
        // entries is an object that contains methods to interact with the local DB
        this.entries = {
            add: (entry) => {
                const transaction = this.entries.transaction(['entries'], 'readwrite'),
                      store = transaction.objectStore('entries')
                store.add(entry)
            },
            remove: (entry) => {
                const transaction = this.entries.transaction(['entries'], 'readwrite'),
                      store = transaction.objectStore('entries')
                store.delete(entry)
            },
            update: (entry) => {
                const transaction = this.entries.transaction(['entries'], 'readwrite'),
                      store = transaction.objectStore('entries')
                store.put(entry)
            },
            get: (entry) => {
                const transaction = this.entries.transaction(['entries'], 'readwrite'),
                      store = transaction.objectStore('entries')
                store.get(entry)
            },
            getAll: () => {
                const transaction = this.entries.transaction(['entries'], 'readwrite'),
                      store = transaction.objectStore('entries')
                store.getAll()
            },
            clear: () => {
                const transaction = this.entries.transaction(['entries'], 'readwrite'),
                      store = transaction.objectStore('entries')
                store.clear()
            },
            store: () => {
                const db = window.indexedDB.open('entries')
                db.onsuccess = (event) => {
                    console.log('Database opened successfully')
                    const db = event.target.result
                    return db.transaction(['entries'], 'readwrite').objectStore('entries')
                }
                db.onerror = (event) => {
                    console.error('Error opening database')
                }
                db.onupgradeneeded = (event) => {
                    const db = event.target.result,
                          store = db.createObjectStore('entries', {keyPath: 'id', autoIncrement: true})
                    store.createIndex('title', 'title', {unique: false})
                    store.createIndex('content', 'content', {unique: false})
                    store.createIndex('date', 'date', {unique: false})
                }
            },
            transaction: (store, mode) => {
                //return this.entries.transaction(store, mode)
                const db = window.indexedDB.open('entries')
                db.onsuccess = (event) => {
                    console.log('Database opened successfully')
                    const db = event.target.result
                    return db.transaction(store, mode)
                }
                db.onerror = (event) => {
                    console.error('Error opening database')
                }
                db.onupgradeneeded = (event) => {
                    const db = event.target.result,
                          store = db.createObjectStore('entries', {keyPath: 'id', autoIncrement: true})
                    store.createIndex('title', 'title', {unique: false})
                    store.createIndex('content', 'content', {unique: false})
                    store.createIndex('date', 'date', {unique: false})
                }

            },
            onerror: (event) => {
                console.error('Error opening database')
            },
            onsuccess: (event) => {
                console.log('Database opened successfully')
            },
            onupgradeneeded: (event) => {
                const db = event.target.result,
                      store = db.createObjectStore('entries', {keyPath: 'id', autoIncrement: true})
                store.createIndex('title', 'title', {unique: false})
                store.createIndex('content', 'content', {unique: false})
                store.createIndex('date', 'date', {unique: false})
            },
            result: null
        }
        this.getEntries()
    }

}