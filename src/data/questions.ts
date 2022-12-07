import { Questions } from "./types";

const questions: Questions = {
    questions: [
        {
            id: 1,
            prompt: "Which of the following worker surveillance softwares offers screen recording, website tracking, and a patented \"insider threat\" alert system?",
            options: ["Terramind", "Controlio", "Activtrak", "Hubstaff"],
            correctAnswer: 0,
            sources: ["https://www.teramind.co/", "https://controlio.net/", "https://www.activtrak.com/", "https://hubstaff.com/"]
        },
        {
            id: 2,
            prompt: "In the US, is it legal to track the location of company-owned devices (ex: laptops, phones, etc...)?",
            options: ["Yes, there are no restrictions", "Yes, with employee permission", "No, this is never allowed", "No, with some exceptions (i.e.: if it is reported stolen)"],
            correctAnswer: 1,
            sources: ["https://www.greensfelder.com/business-risk-management-blog/monitoring-your-employees-through-gps-what-is-legal-and-what-are-best-practices#:~:text=Best%20practices%20for%20tracking&text=Only%20use%20GPS%20tracking%20in,aware%20of%20the%20GPS%20monitoring.",
            "https://www.greensfelder.com/business-risk-management-blog/monitoring-your-employees-through-gps-what-is-legal-and-what-are-best-practices#:~:text=Best%20practices%20for%20tracking&text=Only%20use%20GPS%20tracking%20in,aware%20of%20the%20GPS%20monitoring.",
            "https://www.greensfelder.com/business-risk-management-blog/monitoring-your-employees-through-gps-what-is-legal-and-what-are-best-practices#:~:text=Best%20practices%20for%20tracking&text=Only%20use%20GPS%20tracking%20in,aware%20of%20the%20GPS%20monitoring.",
            "https://www.greensfelder.com/business-risk-management-blog/monitoring-your-employees-through-gps-what-is-legal-and-what-are-best-practices#:~:text=Best%20practices%20for%20tracking&text=Only%20use%20GPS%20tracking%20in,aware%20of%20the%20GPS%20monitoring."]
        },
        {
            id: 3,
            prompt: "Which of the following most accurately describes bossware?",
            options: ["Bossware [is a collection of] tools [that] allow companies to track the productivity of employees while working from home.", 
            "Computer monitoring software [that] help[s] companies spy on their employees to measure their productivity – often without their consent", 
            "Software that automatically monitors employees – [sometimes] known as “tattleware”.",
            "While aimed at helping employers, bossware puts workers’ privacy and security at risk by logging every click and keystroke, covertly gathering information for lawsuits, and using other spying features that go far beyond what is necessary and proportionate to manage a workforce."
            ],
            sources: ["https://www.monitask.com/en/blog/what-bossware-is-and-how-it-helps-in-remote-work", 
            "https://www.theguardian.com/technology/2022/apr/27/remote-work-software-home-surveillance-computer-monitoring-pandemic", 
            "https://www.softactivity.com/ideas/bossware/",
            "https://www.eff.org/deeplinks/2020/06/inside-invasive-secretive-bossware-tracking-workers"
            ]
        },
        {
            id: 4,
            prompt: "A major tech company has recently come under scrutiny in the media for it's partnership with Pinkerton, a surveillance company most famous for union-busting during the industrial revolution. The company now needs to do \"damage control\". Which of the following sounds the least concerning?",
            options: [
                "Amazon reportedly has pinkerton agents surveil workers who try to form unions", 
                "Amazon is using union-busting Pinkerton spies to track warehouse workers and labor movements at the company", 
                "The Pinkerton National Detective Agency, the assailants contracted by Clay Frick (Andrew Carnegie’s Operations Manager)  to disband the 1892 Homestead Strike, leading to one of the bloodiest labor conflicts of the 19th century, have made come back into the zeitgeist as Amazon allegedly contracts them to spy on warehouse workers", 
                "Amazon allegedly investigate worker productivity in certain warehouses, sparking protest from some labor movements"],
            sources: ["https://www.npr.org/2020/11/30/940196997/amazon-reportedly-has-pinkerton-agents-surveil-workers-who-try-to-form-unions",
                "https://www.businessinsider.com/amazon-pinkerton-spies-worker-labor-unions-2020-11",
                "https://www.teenvogue.com/story/who-were-the-pinkertons",
                "https://www.cnbc.com/2020/10/24/how-amazon-prevents-unions-by-surveilling-employee-activism.html"
            ]
        }
    ]
}

export default questions;