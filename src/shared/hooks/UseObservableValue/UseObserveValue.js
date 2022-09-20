import { BehaviorSubject, debounceTime } from 'rxjs';
/* eslint-disable no-unused-vars */
import { useRef, useEffect, useMemo } from 'react';

const useObservedValue = (value) => {
  const inputValue$ = new BehaviorSubject(value);
  const inputPropRef = useRef(inputValue$);

  useEffect(() => {
      inputPropRef.current.next(value);
  }, [value]);

    return inputPropRef.current.asObservable().pipe(
      debounceTime(700)
    );
};

export default useObservedValue;