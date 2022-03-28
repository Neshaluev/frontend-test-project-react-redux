import './FileInput.scss';

import React, {useState} from 'react';

type FileInputProps = {
    name: string;
    error?: any;
    onChangeImage?: any;
    [x: string]: any;
};

const FileInput = React.forwardRef<HTMLInputElement, FileInputProps>(
    (props, ref) => {
        const {name, error, onChangeImage, ...attrs} = props;

        const [state, setState] = useState<string>('Загрузить изображение');

        const handleFileInput = (e: any) => {
            onChangeImage(e);
            if (!error) {
                setState('Изображение загруженно');
            }
        };

        return (
            <div className="file-input">
                <label htmlFor="file-upload" className="custom-file-upload">
                    {/* <Icon name={'cloud-upload'} /> */}
                    <span className="custom-file-upload__text">{state}</span>
                </label>
                <input
                    onChange={handleFileInput}
                    {...attrs}
                    name={name}
                    id="file-upload"
                    type="file"
                    ref={ref}
                />
                {error && (
                    <span className="file-upload-error"> {error.message}</span>
                )}
            </div>
        );
    },
);

export default FileInput;
