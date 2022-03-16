import { FunctionComponent, useState, ReactNode } from "react";

interface DropdownContentProps {
  children?: ReactNode;
  title?: string;
}

/**
 * React Component function : Dropdown content
 * @param props Component props
 * @param props.children Inner content children elements
 * @param props.title Dropdown title
 */
const DropdownContent: FunctionComponent<DropdownContentProps> = ({children, title}: DropdownContentProps) => {
  const [expanded, setExpanded] = useState<boolean>(false)

  // Toogle function to show content
  const toogleExpand = () => {
    setExpanded(!expanded)
  }

  return (
    <div onClick={toogleExpand} className={expanded ? "dropdown dropdown--expanded" : "dropdown" }>
      <h2 className="dropdown__title">{ title }</h2>
      <div className="dropdown__content">{children}</div>      
    </div>
  );
}

export default DropdownContent;