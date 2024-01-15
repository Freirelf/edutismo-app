import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';

interface Option {
  value: string;
  label: string;
  destination: string;
}

interface DropdownProps {
  options: Option[];
  label: string;
}

const Dropdown: React.FC<DropdownProps> = ({ options, label }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  useEffect(() => {
    const currentOption = options.find((opt) => router.pathname.includes(opt.destination));
    if (currentOption) {
      setSelectedOption(currentOption);
    }
  }, [router.pathname, options]);

  const handleSelect = (selected: Option) => {
    setSelectedOption(selected);
    setIsOpen(false);
    router.push(selected.destination);
  };

  return (
    <div className={styles.dropdown}>
      <div
        className={`${styles['dropdown-header']} ${isOpen ? styles.open : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {label} <span className={styles.arrow}>{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && (
        <div className={styles['dropdown-options']}>
          {options.map((option) => (
            <div
              key={option.value}
              className={`${styles['dropdown-option']} ${
                selectedOption?.value === option.value ? styles.selected : ''
              }`}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
      {selectedOption && (
        <div className={styles['selected-profile']}>
          <span
            className={`${styles.profileSelected} ${
            selectedOption.value === 'parent' ? styles.profilePais : styles.profileCrianca
            }`}
          >
            {selectedOption.label}
          </span>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
