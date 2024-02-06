import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
	message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
	if (!message) return null;

	return (
		<div className="bg-destructive/15 p-3 flex rounded-md items-center text-sm text-destructive gap-x-2">
			<ExclamationTriangleIcon className="w-4 h-4" />
			<p>{message}</p>
		</div>
	);
};
