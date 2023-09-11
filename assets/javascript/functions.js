export let newZIndex = 2;
export const calcZIndex = () => {
	return newZIndex++;
};

export const getFormattedDateAndTime = () => {
	const date = new Date().toUTCString().slice(0, 11).replace(",", "");

	const australiaDateAndTime = new Date().toLocaleString("en-US", {
		timeZone: "Australia/Sydney",
	});
	const australiaTime = australiaDateAndTime
		.slice(11, 16)
		.replace(/(?=.$)([:])/, "");
	const australiaAmOrPm = australiaDateAndTime.slice(19);
	return `${date} ${australiaTime} ${australiaAmOrPm}`;
};
