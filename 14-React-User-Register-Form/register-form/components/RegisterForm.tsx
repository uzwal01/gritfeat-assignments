import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterSchemaType } from "../schemas/registerSchema";

export default function RegisterForm() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      skills: [""], // atleast 1 skill field by default
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills", // TypeScript will now accept this
  });

  const onSubmit = (data: RegisterSchemaType) => {
    console.log("Submitted Data:", data);
    alert("Form Submitted Successfully!");
    reset({ skills: [""] }); // reset form with 1 skill
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-6 max-w-lg mx-auto bg-white rounded-2xl shadow-md space-y-4"
      >
        {/* FirstName */}
        <div>
          <label className="block font-medium">First Name*</label>
          <input
            {...register("firstName")}
            className="w-full p-2 border rounded"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName.message}</p>
          )}
        </div>

        {/* LastName */}
        <div>
          <label className="block font-medium">Last Name*</label>
          <input
            {...register("lastName")}
            className="w-full p-2 border rounded"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium">Email*</label>
          <input {...register("email")} className="w-full p-2 border rounded" />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        {/* Contact */}
        <div>
          <label className="block font-medium">Contact Number*</label>
          <input
            {...register("contact")}
            className="w-full p-2 border rounded"
          />
          {errors.contact && (
            <p className="text-red-500 text-sm">{errors.contact.message}</p>
          )}
        </div>

        {/* Role */}
        <div>
          <label className="block font-medium">Role*</label>
          <select {...register("role")} className="w-full p-2 border rounded">
            <option value="">Select Role</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Project Manager</option>
          </select>
          {errors.role && (
            <p className="text-red-500 text-sm">{errors.role.message}</p>
          )}
        </div>

        {/* Skills with Dynamic Fields */}
        <div>
          <label className="block font-medium">Skills*</label>
          {fields.map((field, index) => (
            <div key={field.id} className="flex items-center space-x-2 mb-2">
              <input
                {...register(`skills.${index}`)}
                className="flex-1 p-2 border rounded"
              />
              {errors.skills?.[index] && (
                <p className="text-red-500 text-sm">
                  {errors.skills[index]?.message}
                </p>
              )}
              <button
                type="button"
                onClick={() => remove(index)}
                className="px-2 py-1 bg-red-500 text-white rounded-full cursor-pointer hover:bg-red-800 transition-colors duration-300"
              >
                Delete
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={() => append("")}
            className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-800 transition-colors duration-300"
          >
            + Add Skill
          </button>
          {errors.skills && (
            <p className="text-red-500 text-sm">
              {errors.skills.message as string}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block font-medium">Message</label>
          <textarea
            {...register("message")}
            className="w-full h-30 resize-none p-2 border rounded"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-2 bg-green-500 hover:bg-green-800 transition-colors duration-300 text-white rounded cursor-pointer"
        >
          Submit
        </button>
      </form>
    </>
  );
}
