import React from "react";
import Icon800x800 from "@root/tests/assets/Icon800x800.png";
import { Icon } from "@/utils/Icon";
import styles from "./CreatorsSection.module.css";
import Modal from "../../../components/common/organisms/Modal/Modal";

interface Creator {
  id: number;
  username: string;
}

type CreatorProps = {
  creators: Creator[];
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

const CreatorsSection: React.FC<CreatorProps> = ({
  creators,
  isOpen,
  setIsOpen,
}) => {
  // const [isOpen, setIsOpen] = useState(false);

  if (!creators || creators.length === 0) return null;

  const visibleCreators = creators.slice(0, 7);

  return (
    <div className={styles.creatorsSection}>
      <div className={styles.creatorsSection__list}>
        {visibleCreators.map((c) => (
          <div
            key={c.id}
            className={styles.creatorsSection__avatar}
            title={c.username}
          >
            <img src={Icon800x800} alt={c.username} />
          </div>
        ))}

        <button
          className={styles.creatorsSection__moreButton}
          onClick={() => setIsOpen(true)}
          aria-label="もっと見る"
        >
          <Icon name="three-dots" fill="#fff" size={16} />
        </button>
      </div>

      {isOpen && (
        <Modal title="作成者一覧" onClose={() => setIsOpen(false)}>
          {/* <h2 className={styles.creatorsSection__dialogTitle}>作成者一覧</h2> */}
          <ul className={styles.creatorsSection__listFull}>
            {creators.map((c) => (
              <li
                key={c.id}
                className={styles.creatorsSection__listItem}
                title={c.username}
              >
                <img src={Icon800x800} alt={c.username} />
                <span className={styles.creatorsSection__username}>
                  {c.username}
                </span>
              </li>
            ))}
          </ul>
        </Modal>
      )}
    </div>
  );
};

export default CreatorsSection;
