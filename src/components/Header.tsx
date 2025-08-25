import { useUIStore } from "@/stores/ui.store";
import { useAuthStore } from "@/stores/auth.store";
import { Switch } from "antd";

import { cn } from "@/common/utils";

export default function Header() {
  const { theme, toggleTheme } = useUIStore();
  const { user, login, logout } = useAuthStore();

  return (
    <header className={cn(
      "flex justify-between items-center p-2 bg-base text-tx-primary dark:border-gray-600 dark:border-b-[0.5px]",
    )}>
      <div className="p-2 flex gap-2">
        Zalo OA
      </div>
      <hr />
      <div className="flex items-center gap-4">
        <Switch
          checked={theme === "light"}
          onChange={toggleTheme}
          checkedChildren="☀️"
          unCheckedChildren="🌙"
        />
        {user ? (
          <div className="flex items-center gap-2">
            <span>Hello, {user.name}</span>
            <button onClick={logout} className="px-2 py-1 bg-red-500 text-white rounded">
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={() => login({ id: "1", name: "Mic", email: "mic@example.com" }, "fake-token")}
            className="px-2 py-1 bg-green-500 text-white rounded"
          >
            Login
          </button>
        )}
      </div>

    </header>
  );
}
