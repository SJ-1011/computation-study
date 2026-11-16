import AdminForm from "@/components/AdminForm";
export default function AdminPage() {
  return (
    <section className="flex flex-col mt-12 gap-8 mr-12 w-full">
      <p className="text-4xl font-bold">관리자 페이지</p> <AdminForm />
    </section>
  );
}
