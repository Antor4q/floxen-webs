"use client";

import { Trash2, X } from "lucide-react";


interface AccountModalsProps {
  showDeleteModal: boolean;
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
   Delete Account Modal
========================= */

interface DeleteAccountModalProps {
  onClose: () => void;
}

const DeleteAccountModal = ({ onClose }: DeleteAccountModalProps) => {
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
  showDeleteModal,
  onCloseDelete,
}: AccountModalsProps) => {
  return (
    <>
      {showDeleteModal && (
        <DeleteAccountModal onClose={onCloseDelete} />
      )}
    </>
  );
};

export default AccountModals;