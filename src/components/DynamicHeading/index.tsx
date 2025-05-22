type Props = React.HTMLAttributes<HTMLHeadingElement> & {
  readonly level: 1 | 2 | 3 | 4 | 5 | 6;
};

/**
 * A component that renders a heading element (h1-h6) based on the level prop.
 * @param {number} level The heading level (1-6).
 * @param {React.HTMLAttributes<HTMLHeadingElement>} rest Any other props to be passed to the heading element.
 * @returns {JSX.Element} The rendered heading element.
 */
const DynamicHeading = ({ level, children, ...rest }: Props) => {
  if (level < 1 || level > 6) {
    throw new Error('Level must be between 1 and 6');
  }

  const HeadingTag = `h${level}` as const;
  return <HeadingTag {...rest}>{children}</HeadingTag>;
};

export default DynamicHeading;
