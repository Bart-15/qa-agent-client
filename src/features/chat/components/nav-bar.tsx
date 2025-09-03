type NavBarProps = {
  activeTab: 'chat' | 'upload-document';
  onTabChange: (tab: 'chat' | 'upload-document') => void;
};

const NavBar = ({ activeTab, onTabChange }: NavBarProps) => {
  return (
    <nav className="border-b border-[#646cff]/20 p-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex gap-4">
          <button
            onClick={() => onTabChange('chat')}
            className={`rounded-lg px-4 py-2 transition-colors ${activeTab === 'chat' ? 'bg-[#646cff] text-white' : 'text-[#646cff] hover:bg-[#646cff]/10'}`}
          >
            Chat
          </button>
          <button
            onClick={() => onTabChange('upload-document')}
            className={`rounded-lg px-4 py-2 transition-colors ${activeTab === 'upload-document' ? 'bg-[#646cff] text-white' : 'text-[#646cff] hover:bg-[#646cff]/10'}`}
          >
            Upload Document
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
