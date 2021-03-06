import React from 'react';
import styled, { css } from 'styled-components';

interface InputProps {
  value: string;
  label: string;
  onChange: Function;
  type?: string;
  name: string;
  suggestions?: string[];
}

const FormFieldWrapper = styled.div`
  position: relative;
  textarea {
    min-height: 150px;
  }
  input[type='color'] {
    padding-left: 56px;
  }
`;

const Label: any = styled.label``;
Label.Text = styled.span`
  color: #e5e5e5;
  height: 57px;
  position: absolute;
  top: 0;
  left: 16px;

  display: flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;

  transition: 0.1s ease-in-out;
`;

const Input = styled.input`
  background: #53585d;
  color: #f5f5f5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;

  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585d;

  padding: 16px 16px;
  margin-bottom: 45px;

  resize: none;
  border-radius: 4px;
  transition: border-color 0.3s;

  &:focus {
    border-bottom-color: var(--primary);
  }
  &:focus:not([type='color']) + span {
    transform: scale(0.6) translateY(-10px);
  }
  ${({ hasValue }: any) =>
    hasValue &&
    css`
      &:not([type='color']) + span {
        transform: scale(0.6) translateY(-10px);
      }
    `}
`;

const FormField = ({
  value,
  label,
  onChange,
  type = 'text',
  name,
  suggestions = [],
}: InputProps) => {
  const handleOnChange = (inputKey: string | null, value: string) => {
    if (inputKey === null) {
      return onChange(value);
    } else {
      return onChange(inputKey, value);
    }
  };
  const fieldId = `id_${name}`;
  const isTypeTextarea = type === 'textarea';
  const tag: any = isTypeTextarea ? 'textarea' : 'input';
  const hasValue = Boolean(value.length);
  const hasSuggestions = Boolean(suggestions.length);

  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId}>
        <Input
          as={tag}
          id={fieldId}
          value={value}
          type={type}
          name={name}
          onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
            handleOnChange(target.getAttribute('name'), target.value)
          }
          hasValue={hasValue}
          autoComplete={hasSuggestions ? 'off' : 'on'}
          list={hasSuggestions ? `suggestionFor_${fieldId}` : undefined}
        />
        <Label.Text>{label}</Label.Text>
        {hasSuggestions && (
          <datalist id={`suggestionFor_${fieldId}`}>
            {suggestions?.map((suggestion) => {
              return (
                <option
                  value={suggestion}
                  key={`suggestionFor_${fieldId}_option${suggestion}`}
                >
                  {suggestion}
                </option>
              );
            })}
          </datalist>
        )}
      </Label>
    </FormFieldWrapper>
  );
};

export default FormField;
