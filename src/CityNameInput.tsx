interface Props {
	currentValue: string;
	setValue: React.Dispatch<React.SetStateAction<string>>;
}

const CityNameInput = ({ currentValue, setValue }: Props) => {
	return (
		<>
			<label id="city-name-input-label" htmlFor="city-name-input">
				Stadt
			</label>
			<input
				id="city-name-input"
				name="city-name-input"
				value={currentValue}
				onChange={(e) => {
					setValue(e.target.value);
				}}
			/>
		</>
	);
};

export { CityNameInput };
