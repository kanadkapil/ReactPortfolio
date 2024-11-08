import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://kanadkapil.github.io/Web-Works-Live/FlipCards/"
          h3="Memory Game"
          p="Flip cards game"
        />
        <ProjectCard
          src={freshBurger}
          link="https://kanadkapil.github.io/Web-Works-Live/CodeLanguage/"
          h3="Emoji Code"
          p="Secret Code Generator"
        />
        <ProjectCard
          src={hipsster}
          link="https://kanadkapil.github.io/Web-Works-Live/ChartJs/"
          h3="Chart Graph"
          p="Making Charts/Stats"
        />
        <ProjectCard
          src={fitLift}
          link="https://kanadkapil.github.io/Web-Works-Live/Magazine/"
          h3="Magazine"
          p="Nothing Special"
        />
      </div>
    </section>
  );
}

export default Projects;
