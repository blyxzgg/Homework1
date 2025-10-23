import type { RootState } from "../../store"

export const saveToLocalStorage = (state: RootState) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('appState', serializedState)
    } catch (err) {
        console.warn('Error saving to localStorage:', err)
    }
}

export const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('appState')
        if (!serializedState) return undefined
        return JSON.parse(serializedState)
    } catch (err) {
        console.warn('Error loading from localStorage:', err)
        return undefined
    }
}
