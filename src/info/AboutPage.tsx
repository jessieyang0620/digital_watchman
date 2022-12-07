import React from 'react';

function AboutPage() {
    return (
        <div className="d-flex vh-100 flex-column justify-content-center p-5">
            <h2>About This Project</h2>
        <p>Digital_Watchman is an interactive web experience that coalesces and presents information about worker surveillance in the tech and e-commerce industries through the framing of being a new, high-tech “worker productivity” monitoring system. <br/>
            This project puts the user in the position of the employer, looking for a way to monitor their employees. Upon a quick Google search for workplace monitoring software, they come across Digital_Watchman. Before purchasing this expensive software, they wisely chose to experience the demo first. <br/>
            The demo leads them through two views of the software working: the worker’s perspective and the employer’s. 
        </p>
        
        <h2>The Worker View</h2>
        <p>The worker view has the user answering questions and categorizing information, a rote and boring task. 
            In doing this, the user plays the role of the faceless, human workers behind the categorization of data that is used by companies for data analytics and AI/ML training – a group of workers that is often forgotten in the glorification of AI and modern technology. 
            As the worker completes their tasks, data is collected on their performance, and if they fall behind or participate in any “risky” behavior, they are sent a not-so-friendly friendly reminder from the system to focus on the task at hand. 
            This emulates the functions of real worker surveillance softwares and keeps the pressure on the worker to perform well. Meanwhile, the information that they are rotely categorizing is critically relevant to their role as an employee. <br/>
            All of the questions asked relate to worker surveillance, and some of them reveal morally (and sometimes legally) questionable actions that the leaders of major corporations have committed against their workers. Does the worker have time to reflect on these? 
            No – the system hurries them along through their assembly line of tasks. However, due to the nature of the task, the worker/user must stop to consider the implications of each of the statements they are reading. After they are done, they receive an abbreviated summary of their performance. </p>

        <h2>The Employer View</h2>
        <p>The boss’ view, on the other hand, displays the full scope of what data was collected on the worker. This includes screen recording, keystroke tracking, site tracking, and more (similar to what real worker surveillance softwares can do). 
            This is all in an effort to quickly show the employer which of their employees are “good employees”. The user is able to browse through the boss view after they complete the worker view simulation and see the data that was collected on them. <br/>
            I encourage the user to examine their feelings about being confronted with this data. Do you feel violated? Confused? Is this data an accurate representation of your work?
        </p>
        <h2>The Info Page</h2>
        <p> In addition to the demo, there is an “Info” page that presents a summary of each piece of worker surveillance information presented in the worker view, along with links to the original sources. This page, along with the experience of acting as a worker and seeing “behind the curtain” to what an employer may see, allows the user to explore this threat to our privacy and autonomy at work. <br/>
        </p>
        <p><b>Artist Info: </b> Jessie Yang, <a href="https://www.linkedin.com/in/jyang06/">LinkedIn</a></p>
        </div>
    )
}

export default AboutPage;