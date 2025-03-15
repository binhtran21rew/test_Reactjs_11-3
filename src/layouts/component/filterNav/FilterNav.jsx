import React, { useState } from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import "./filterNav.scss";

import "./filterNav.scss";
function FilterNav({...props}) {
    const {list, onClick} = props;
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="dropdown-container">

        <button
          className="dropdown-button d-flex align-items-center justify-content-between"
          onClick={() => setIsOpen(!isOpen)}
        >
          Filter
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Plus size={18} />
          </motion.div>
        </button>
  
        <motion.div
          className="dropdown-menu"
          initial={{ opacity: 0, y: -10 }}
          animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ display: isOpen ? "block" : "none" }}
        >
          <ul>
          {list.map((item, id) => {
                return (
                    <li onClick={() => onClick(item.id)}>
                        {item.text}
                    </li>
                );
            })}
          </ul>
        </motion.div>
      </div>
    );
}

export default FilterNav;
