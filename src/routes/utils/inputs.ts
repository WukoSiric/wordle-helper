export function word_full(word: String[]): boolean {
    if(word.length == 5) {
        return true
    }
    return false
}

export function check_is_letter(char: string): boolean {
    if (char.length > 1) {
        return false
    }
    return /[a-zA-Z]/.test(char)
}

export function add_letter(word: String[], char: string): String[] {
    word[word.length] = char.toUpperCase()
    return word
}

export function is_backspace(char: string): boolean {
    if(char == "Backspace") {
        return true
    }
    return false
}

export function handle_backspace(word: String[]): String[] {
    word.pop()
    return word
}


