import { Heart } from "lucide-react";

const FavouritesTab = () => {
  return (
    <section className="min-h-[400px]">

      <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-10 text-center">

        <Heart
          size={28}
          className="mx-auto text-zinc-700"
        />

        <h2 className="mt-5 text-xl font-semibold text-white">
          Your favourites
        </h2>

        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-zinc-500">
          Designs you save will appear here so you can
          quickly access them later.
        </p>

      </div>
    </section>
  );
};

export default FavouritesTab;