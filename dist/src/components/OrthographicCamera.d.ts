import React from 'react';
type Props = JSX.IntrinsicElements['orthographicCamera'] & {
    makeDefault?: boolean;
};
export declare const OrthographicCamera: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<unknown>>;
export {};
