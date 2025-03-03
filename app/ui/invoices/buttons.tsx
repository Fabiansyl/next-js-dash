import { TrashIcon } from "@heroicons/react/24/outline";
import { deleteInvoice } from "@/app/lib/actions";

export function DeleteInvoice({ id }: { id: string }) {
  // Function to handle the deletion
  const handleDelete = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the default form submission behavior

    try {
      const response = await deleteInvoice(id);
      if (response && response.message) {
        console.log(response.message); // Handle the response (e.g., show a success message)
      }
    } catch (error) {
      console.error("Error deleting invoice:", error); // Handle error (e.g., show an error message)
    }
  };

  return (
    <form onSubmit={handleDelete}>
      <button type="submit" className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}
