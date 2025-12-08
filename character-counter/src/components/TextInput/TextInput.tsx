export interface TextInputProps {
  onTextChange: (text: string) => void;
  placeholder?: string;
  initialValue?: string;
}
export default function TextInput({text, onChange}:
    TextInputProps) {
        const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
            const newText = event.target.value 
            onChange(newText)
        }
          return (
        <>
        <input type="text" onChange={handleInput}></input>
        <p>{placeholder}</p>
        </>
    )
}