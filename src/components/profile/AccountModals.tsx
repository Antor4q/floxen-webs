"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { Trash2, X, ImagePlus, Loader2 } from "lucide-react";

import type { IUser } from "@/src/components/shared/types";
import { useUpdateUserMutation } from "@/src/redux/auth/userApi";


interface AccountModalsProps {
  user: IUser;

  showEditModal: boolean;
  showDeleteModal: boolean;

  onCloseEdit: () => void;
  onCloseDelete: () => void;
}

/* =========================
   Common Modal
========================= */

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[#090909] p-6 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-white/50 transition hover:text-white"
        >
          <X size={20} />
        </button>

        {children}
      </div>
    </div>
  );
};

/* =========================
   Edit Profile Modal
========================= */

interface EditProfileModalProps {
  user: IUser;
  onClose: () => void;
}

const EditProfileModal = ({
  user,
  onClose,
}: EditProfileModalProps) => {
  const [name, setName] = useState(user.name || "");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [preview, setPreview] = useState(user.picture || "");

  const [updateUser, { isLoading }] = useUpdateUserMutation();

  const handleImageChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image.");
      return;
    }

    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleUpdateProfile = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!user._id) return;

    const trimmedName = name.trim();

    if (!trimmedName) {
      alert("Name is required.");
      return;
    }

    const formData = new FormData();

    formData.append("name", trimmedName);

    if (imageFile) {
      formData.append("picture", imageFile);
    }

    try {
      await updateUser({
        userId: user._id.toString(),

        // Existing API change করছি না.
        // Backend-এ actual FormData যাবে.
        data: formData as never,
      }).unwrap();

      onClose();
    } catch (error) {
      console.error("Profile update failed:", error);
      alert("Failed to update profile.");
    }
  };

  return (
    <Modal onClose={onClose}>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white">
          Edit Profile
        </h2>

        <p className="mt-1 text-sm text-white/50">
          Update your profile information.
        </p>
      </div>

      <form onSubmit={handleUpdateProfile}>
        {/* Profile Picture */}
        <div className="mb-6 flex flex-col items-center">
          <div className="relative">
            <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              {preview ? (
                <img
                  src={preview}
                  alt={user.name || "Profile"}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="text-3xl font-semibold text-white">
                  {user.name?.charAt(0).toUpperCase()}
                </span>
              )}
            </div>

            <label
              htmlFor="profile-picture"
              className="absolute -bottom-2 -right-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#090909] bg-white text-black transition hover:bg-white/90"
            >
              <ImagePlus size={16} />

              <input
                id="profile-picture"
                type="file"
                accept="image/png,image/jpeg,image/jpg,image/webp"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>

          <p className="mt-3 text-xs text-white/40">
            JPG, PNG or WebP
          </p>
        </div>

        {/* Name */}
        <div className="mb-6">
          <label
            htmlFor="profile-name"
            className="mb-2 block text-sm font-medium text-white"
          >
            Name
          </label>

          <input
            id="profile-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-white/30"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={onClose}
            disabled={isLoading}
            className="flex-1 rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-white/70 transition hover:bg-white/5 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={isLoading || !name.trim()}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <Loader2
                  size={16}
                  className="animate-spin"
                />
                Saving...
              </>
            ) : (
              "Save Changes"
            )}
          </button>
        </div>
      </form>
    </Modal>
  );
};

/* =========================
   Delete Account Modal
========================= */

interface DeleteAccountModalProps {
  onClose: () => void;
}

const DeleteAccountModal = ({
  onClose,
}: DeleteAccountModalProps) => {
  return (
    <Modal onClose={onClose}>
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-500/10 text-red-500">
          <Trash2 size={24} />
        </div>

        <h2 className="text-xl font-semibold text-white">
          Delete Account
        </h2>

        <p className="mt-2 text-sm leading-6 text-white/50">
          Are you sure you want to delete your account?
          This action cannot be undone.
        </p>

        <div className="mt-6 flex w-full gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-white/70 transition hover:bg-white/5 hover:text-white"
          >
            Cancel
          </button>

          <button
            type="button"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-red-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
          >
            <Trash2 size={16} />
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
};

/* =========================
   Account Modals
========================= */

const AccountModals = ({
  user,
  showEditModal,
  showDeleteModal,
  onCloseEdit,
  onCloseDelete,
}: AccountModalsProps) => {
  return (
    <>
      {showEditModal && (
        <EditProfileModal
          user={user}
          onClose={onCloseEdit}
        />
      )}

      {showDeleteModal && (
        <DeleteAccountModal
          onClose={onCloseDelete}
        />
      )}
    </>
  );
};

export default AccountModals;