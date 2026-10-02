import { supabase } from "@/lib/supabase/client";

export type Computation = {
  id: number;
  type: "ox" | "short";
  subject: string;
  question: string;
  answer: string;
};

export type CreateComputation = {
  type: "ox" | "short";
  subject: string;
  question: string;
  answer: string;
};

export type UpdateComputation = {
  type?: "ox" | "short";
  subject?: string;
  question?: string;
  answer?: string;
};

// CREATE
export async function createComputation(computation: CreateComputation) {
  const { data, error } = await supabase
    .from("Computation")
    .insert(computation)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data as Computation;
}

// READ - 전체 조회
export async function getComputations() {
  const { data, error } = await supabase
    .from("Computation")
    .select("*")
    .order("id", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data as Computation[];
}

// READ - 하나 조회
export async function getComputation(id: number) {
  const { data, error } = await supabase
    .from("Computation")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data as Computation;
}

// UPDATE
export async function updateComputation(
  id: number,
  computation: UpdateComputation,
) {
  const { data, error } = await supabase
    .from("Computation")
    .update(computation)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data as Computation;
}

// DELETE
export async function deleteComputation(id: number) {
  const { error } = await supabase.from("Computation").delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
}
