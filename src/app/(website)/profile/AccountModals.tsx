import { Trash2, X } from "lucide-react";
import { ProfileData } from "./page";



interface AccountModalsProps {
  profileData: ProfileData;

  showEditModal: boolean;
  showPasswordModal: boolean;
  showDeleteModal: boolean;

  onCloseEdit: () => void;
  onClosePassword: () => void;
  onCloseDelete: () => void;
}

const AccountModals = ({
  profileData,

  showEditModal,
  showPasswordModal,
  showDeleteModal,

  onCloseEdit,
  onClosePassword,
  onCloseDelete,
}: AccountModalsProps) => {
  return (
    <>
      {/* ================================================= */}
      {/* EDIT PROFILE */}
      {/* ================================================= */}

      {showEditModal && (
        <Modal
          title="Edit profile"
          onClose={onCloseEdit}
        >
          <div className="space-y-5">

            <div>
              <label className="mb-2 block text-xs text-zinc-500">
                Full name
              </label>

              <input
                defaultValue={profileData.name}
                className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-white outline-none focus:border-violet-400/40"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs text-zinc-500">
                Email
              </label>

              <input
                value={profileData.email}
                disabled
                className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 text-sm text-zinc-600 outline-none"
              />
            </div>

            <button className="h-12 w-full rounded-xl bg-violet-500 text-sm font-medium text-white transition hover:bg-violet-400">
              Save Changes
            </button>

          </div>
        </Modal>
      )}

      {/* ================================================= */}
      {/* PASSWORD */}
      {/* ================================================= */}

      {showPasswordModal && (
        <Modal
          title={
            profileData.hasPassword
              ? "Change password"
              : "Set password"
          }
          onClose={onClosePassword}
        >
          <div className="space-y-5">

            {profileData.hasPassword && (
              <div>
                <label className="mb-2 block text-xs text-zinc-500">
                  Current password
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-white outline-none focus:border-violet-400/40"
                />
              </div>
            )}

            <div>
              <label className="mb-2 block text-xs text-zinc-500">
                {profileData.hasPassword
                  ? "New password"
                  : "Create password"}
              </label>

              <input
                type="password"
                placeholder="••••••••"
                className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-white outline-none focus:border-violet-400/40"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs text-zinc-500">
                Confirm password
              </label>

              <input
                type="password"
                placeholder="••••••••"
                className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-white outline-none focus:border-violet-400/40"
              />
            </div>

            <button className="h-12 w-full rounded-xl bg-violet-500 text-sm font-medium text-white transition hover:bg-violet-400">
              {profileData.hasPassword
                ? "Change Password"
                : "Set Password"}
            </button>

          </div>
        </Modal>
      )}

      {/* ================================================= */}
      {/* DELETE ACCOUNT */}
      {/* ================================================= */}

      {showDeleteModal && (
        <Modal
          title="Delete account"
          onClose={onCloseDelete}
        >
          <div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
              <Trash2 size={20} />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-white">
              Are you sure?
            </h3>

            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Deleting your account will permanently remove
              your profile, favourites and account data. This
              action cannot be undone.
            </p>

            <div className="mt-6 flex gap-3">

              <button
                onClick={onCloseDelete}
                className="flex-1 rounded-xl border border-white/10 bg-white/[0.03] py-3 text-sm text-zinc-300 transition hover:bg-white/[0.07]"
              >
                Cancel
              </button>

              <button className="flex-1 rounded-xl bg-red-500/10 py-3 text-sm text-red-400 transition hover:bg-red-500/20">
                Delete Account
              </button>

            </div>

          </div>
        </Modal>
      )}
    </>
  );
};

export default AccountModals;


/* ================================================= */
/* MODAL */
/* ================================================= */

const Modal = ({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-5 backdrop-blur-md">

      <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-[#090909] p-7 shadow-[0_30px_100px_rgba(0,0,0,.6)]">

        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full text-zinc-600 transition hover:bg-white/[0.05] hover:text-white"
        >
          <X size={17} />
        </button>

        <h2 className="text-xl font-semibold text-white">
          {title}
        </h2>

        <div className="mt-6">
          {children}
        </div>

      </div>
    </div>
  );
};