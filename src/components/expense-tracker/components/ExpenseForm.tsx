import {z} from 'zod';
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import categories from "../Categories.tsx";
import {Simulate} from "react-dom/test-utils";
import reset = Simulate.reset;

const schema = z.object({
    description: z.string().min(3, {message: 'description must be at least 3 characters '}).max(50),
    amount: z.number({invalid_type_error: 'amount field is required'}).min(0.1, ).max(100_000),
    category: z.enum(categories,{errorMap: () => ({message: 'Please select a valid category'})})
});
type ExpenseFormData = z.infer<typeof schema>;

interface Props {
    onSubmit : (data: ExpenseFormData) => void;
}
function ExpenseForm( {onSubmit}: Props) {
    const {register, handleSubmit,reset, formState: {errors}} = useForm<ExpenseFormData>({
        resolver: zodResolver(schema)
    });
    return (
        <>
            <form onSubmit={handleSubmit(data => {
                onSubmit(data);
                reset();
            })}>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input id="description" {...register("description")} type="text" className="form-control"/>
                    {errors.description && <p className="text-danger">{errors.description?.message}</p>}

                </div>

                <div className="mb-3 mt-3">
                    <label htmlFor="amount" className="form-label">Amount</label>
                    <input id="amount"  {...register("amount",{valueAsNumber:true})} type="number" className="from-control"/>
                    {errors.amount && <p className="text-danger">{errors.amount?.message}</p>}

                </div>

                <div className="mb-3 mt-3">
                    <label htmlFor="category" className="form-label">Category</label>
                    <select id="category" {...register("category")} name="category" autoComplete="country-name" className="   ">
                        {categories.map((category) => <option key={category} value={category}>{category}</option>)}
                    </select>
                    {errors.category && <p className="text-danger">{errors.category?.message}</p>}

                </div>

                <div className="mb-3 mt-3">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>

            </form>


        </>
    );
}

export default ExpenseForm;