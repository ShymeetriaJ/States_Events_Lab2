export interface TextInputProps {
  onTextChange: (text: string) => void;
  placeholder?: string;
  initialValue?: string;
}
export default function TextInput({onTextChange, placeholder, initialValue}: TextInputProps) {
        const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
            const newText = event.target.value 
            onTextChange(newText)
        }
          return (
        <>
        <input type="text" 
        onChange={handleInput}
        placeholder={placeholder}
        defaultValue={initialValue}
        />
        
        </>
    )
}