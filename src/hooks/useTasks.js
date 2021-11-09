import { useContext } from 'react';
import { Context } from '../contexts/context';

export function useTasks() {
    const value = useContext(Context);

    return value;
}
