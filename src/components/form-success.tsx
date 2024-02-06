import { CheckCircledIcon } from "@radix-ui/react-icons";

interface FormSuccessProps {
	message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
	if (!message) return null;

	return (
		<div className="bg-emerald/15 p-3 flex rounded-md items-center text-sm text-emerald gap-x-2">
			<CheckCircledIcon className="w-4 h-4" />
			<p>{message}</p>
		</div>
	);
};
