import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface DBProduct {
  id: number;
  name: string;
  name_ar: string | null;
  price: number;
  category: string;
  image: string;
  rating: number;
  badge: string | null;
  badge_ar: string | null;
  created_at: string;
}

export type ProductInsert = Omit<DBProduct, "id" | "created_at">;
export type ProductUpdate = Partial<ProductInsert>;

const fetchProducts = async (): Promise<DBProduct[]> => {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("id", { ascending: true });
  if (error) throw error;
  return (data as unknown as DBProduct[]) ?? [];
};

export const useProducts = () =>
  useQuery({ queryKey: ["products"], queryFn: fetchProducts });

export const useAddProduct = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (product: ProductInsert) => {
      const { data, error } = await supabase
        .from("products")
        .insert(product as any)
        .select()
        .single();
      if (error) throw error;
      return data;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["products"] }),
  });
};

export const useUpdateProduct = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, updates }: { id: number; updates: ProductUpdate }) => {
      const { data, error } = await supabase
        .from("products")
        .update(updates as any)
        .eq("id", id)
        .select()
        .single();
      if (error) throw error;
      return data;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["products"] }),
  });
};

export const useDeleteProduct = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => {
      const { error } = await supabase
        .from("products")
        .delete()
        .eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["products"] }),
  });
};
