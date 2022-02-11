import { IModalContextData } from '../../../contextApi/Modal/IModal';

export interface IWrapperInputProps {
  maxWidth?: number;
}

// modal bug fix
export interface IModalAddPersonProps {
  instanceModal(): IModalContextData;
}
