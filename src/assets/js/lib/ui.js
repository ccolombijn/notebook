import { str } from "./str";
export class UI {
    constructor() {
        this.init();
    }
    init() {
        this.currentMode = {}
        this.initEntries();
    }

    modeSwitch() {
        const dropdown = document.createElement('div')

        dropdown.classList.add('dropdown')
    }

    createEntryCell() {
        const cell = document.createElement('div'),
              id = str.getUUID();
        cell.classList.add('input-group', 'cell');
        cell.innerHTML = `
            <div class="dropdown">
                <button class="btn dropdown-toggle entry-select-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  class="bi bi-braces current-mode-icon" viewBox="0 0 16 16">
                        <path d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6M13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6"/>
                    </svg>
                </button>
                <ul class="dropdown-menu entry_select">
                    <li>
                        <a class="dropdown-item" href="#" data-mode="js">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-braces icon" viewBox="0 0 16 16">
                                <path d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6M13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6"/>
                            </svg>
                            Javascript
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#" data-mode="md">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-justify-left icon" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
                            </svg>
                            Markdown
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#" data-mode="html">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-code-slash icon" viewBox="0 0 16 16">
                                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"/>
                            </svg>
                            HTML
                        </a>
                    </li>
                </ul>
            </div>
            <input class="form-control entry" type="text" id="${id}" data-mode="js" placeholder="" aria-label="Text input with dropdown button">
            <button class="btn entry_exec">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play" viewBox="0 0 16 16">
                    <path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                </svg>
            </button>

        `
        this.currentMode[id] = 'js'
        this.cellActions(cell);
        return cell
    }
    cellActions(cell) {
        const entry = cell.querySelector('.entry'),
              entry_select = cell.querySelector('.entry_select'),
              entry_exec = cell.querySelector('.entry_exec')
        entry_exec.querySelector('.bi-play-fill').classList.add('d-none');
        entry.addEventListener('input', (event) => {
            if (event.target.value) {
                entry_exec.querySelector('.bi-play').classList.add('d-none');
                entry_exec.querySelector('.bi-play-fill').classList.remove('d-none');
            } else {
                entry_exec.querySelector('.bi-play').classList.remove('d-none');
                entry_exec.querySelector('.bi-play-fill').classList.add('d-none');
            }
        });

        [...entry_select.querySelectorAll('a')].forEach( option => {
            option.addEventListener('click',event => this.switchEntryMode(event.target))
        })

        entry_exec.addEventListener('click', (event) => {
           if(entry.value) this.execEntry(entry)
        });

        entry.addEventListener('focus', (event) => {
            event.target.parentElement.classList.remove('cell');
            if (event.target.dataset.mode === 'js') {
                entry.placeholder = 'Type Javascript then Shift+Enter to run. Arrow ↑/↓ to switch modes'
            }else if(event.target.dataset.mode === 'md') {
                entry.placeholder = 'Type Markdown then Shift+Enter to run. Arrow ↑/↓ to switch modes'
            }else if(event.target.dataset.mode === 'html') {
                entry.placeholder = 'Type HTML then Shift+Enter to run. Arrow ↑/↓ to switch modes'
            }
            document.onkeydown = event => {
                switch (event.key) {
                    case 'Enter':
                        if(event.shiftKey) {
                            entry_exec.click();
                        } else {
                            if(!entry.classList.contains('d-none')) {
                                const textarea = document.createElement('textarea');
                                textarea.classList.add('form-control', 'entry');
                                textarea.setAttribute('rows', 5);
                                textarea.setAttribute('placeholder', entry.getAttribute('placeholder'));
                                textarea.innerText = entry.value;
                                entry.classList.add('d-none');
                                entry.after(textarea);
                                textarea.focus();
                            }
                        }
                        break;
                    case 'ArrowUp':
                    case 'ArrowDown':
                        const current_mode = this.currentMode[event.target.id] ? this.currentMode[event.target.id] : 'js',
                              modes = ['js','md','html'],
                              current_index = modes.indexOf(current_mode)
                              let next_index
                        if(event.key === 'ArrowUp'){
                            next_index = current_index+1 > modes.length-1 ? 0 : current_index+1
                        }else if(event.key === 'ArrowDown'){
                            next_index = current_index-1 < 0 ? modes.length-1 : current_index-1
                        }
                        cell.querySelector('[data-mode="'+modes[next_index]+'"]').click()
                        break;
                    default:
                        break;
                }

            }
        });
        entry.addEventListener('blur', (event) => {
            event.target.parentElement.classList.add('cell')
            event.target.placeholder = ''
        });
    }

    initEntries() {
        const element = document.createElement('div');
        element.id = 'entries';
        document.querySelector('#entries-container').appendChild(element);
        element.innerHTML = `
            <button class="btn" id="add-entry-before">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                </svg>
                <span> Add a new entry before current</span>
            </button>
            <button class="btn" id="add-entry-after">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                </svg>
                <span> Add a new entry after current</span>
            </button>
        `;
        const cell = this.createEntryCell();
        const entry_add_before = element.querySelector('#add-entry-before'),
              entry_add_after = element.querySelector('#add-entry-after');
        entry_add_before.after(cell);

        entry_add_before.addEventListener('click', (event) => this.addEntry('before'))
        entry_add_after.addEventListener('click', (event) => this.addEntry('after'))


    }

    addEntry(position) {
        switch (position) {
            case 'before':
                document.querySelector('#add-entry-before').after(this.createEntryCell())
                break;
            case 'after':
                document.querySelector('#add-entry-after').before(this.createEntryCell())
            default:
                break;
        }
    }
    removeEntry() {

    }
    clearEntries() {

    }
    updateEntry() {

    }
    execEntry(entry){
        const cell = entry.parentElement,
              cell_output = document.querySelector('#output_'+entry.id)
        let output, mode = this.currentMode[entry.id]
        if (mode === 'js') {
            try {
                output = eval(entry.value)
            } catch (error) {
                output = `<span style="color:red;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg> ${error}</span>`
                mode = null
            }

        } else {
            entry.value
        }
        if(cell_output){
            if( mode === 'js') {
                cell_output.innerText = output
            } else {
                cell_output.innerHTML = mode === 'md' ? str.md(output) : output
            }

        } else {
            const cell_output_element = document.createElement('div')
            cell_output_element.id = 'output_'+entry.id
            cell_output_element.classList.add('p-3')
            if( mode === 'js') {
                cell_output_element.innerText = output
            } else {
                cell_output_element.innerHTML = mode === 'md' ? str.md(output) : output
            }
            cell.before(cell_output_element)
        }
    }
    switchEntryMode(option){

        const icon = option.querySelector('.icon'),
              current_icon = icon.cloneNode(true),
              cell = option.parentNode.parentNode.parentNode.parentNode,
              entry = cell.querySelector('.entry'),
              entry_id = entry.id,
              entry_select_btn = cell.querySelector('.entry-select-btn'),
              current_mode_icon = entry_select_btn.querySelector('.current-mode-icon'),
              check = cell.querySelector('.bi-check'),
              current_check = check.cloneNode(true)
        current_mode_icon.remove()
        check.remove()
        option.append(current_check)
        current_icon.classList.add('current-mode-icon')
        entry_select_btn.append(current_icon)
        this.currentMode[entry_id] = option.dataset.mode
        entry.dataset.mode = option.dataset.mode
        if (option.dataset.mode === 'js') {
            entry.placeholder = 'Type Javascript then Shift+Enter to run. Arrow ↑/↓ to switch modes'
        }else if(option.dataset.mode === 'md') {
            entry.placeholder = 'Type Markdown then Shift+Enter to run. Arrow ↑/↓ to switch modes'
        }else if(option.dataset.mode === 'html') {
            entry.placeholder = 'Type HTML then Shift+Enter to run. Arrow ↑/↓ to switch modes'
        }
        entry.focus()
    }
}