function vertical() {return(window.innerWidth < 1242)}
function timeSince2003() {
	const diff = new Date() - new Date(2003, 2, 21);
		const days = Math.floor(diff / 86400000);
		const hours = Math.floor((diff % 86400000) / 3600000);
		const mins = Math.floor(((diff % 86400000) % 3600000) / 60000);
    return `${days} days, ${hours} hours, ${mins} mins`;
};
intro_hor = `         -/oyddmdhs+:.                 gqt@gentoo-linux
     -odNMMMMMMMMNNmhy+-'              ----------------
   -yNMMMMMMMMMMMNNNmmdhy+-            OS: Gentoo 2.15 x86_64
 'omMMMMMMMMMMMMNmdmmmmddhhy/'         Host: github.io
 omMMMMMMMMMMMNhhyyyohmdddhhhdo'       Uptime: ${timeSince2003()}
.ydMMMMMMMMMMdhs++so/smdddhhhhdm+'     Display: ${window.innerWidth}x${window.innerHeight}
 oyhdmNMMMMMMMNdyooydmddddhhhhyhNd.    User: Ara (she/her)
  :oyhhdNNMMMMMMMNNNmmdddhhhhhyymMh    Github: https://github.com/agqt
    .:+sydNMMMMMNNNmmmdddhhhhhhmMmy    Email: gqt@cumallover.me
       /mMMMMMMNNNmmmdddhhhhhmMNhs:    
    'oNMMMMMMMNNNmmmddddhhdmMNhs+'     Type 'help' for a list of commands.
  'sNMMMMMMMMNNNmmmdddddmNMmhs/.    
 /NMMMMMMMMNNNNmmmdddmNMNdso:'    
+MMMMMMMNNNNNmmmmdmNMNdso/-    
yMMNNNNNNNmmmmmNNMmhs+/-'    
/hMMNNNNNNNNMNdhs++/-'    
'/ohdmmddhys+++/:.'    
  '-//////:--.
`

intro_vert = `         -/oyddmdhs+:.    
     -odNMMMMMMMMNNmhy+-'    
   -yNMMMMMMMMMMMNNNmmdhy+-    
 'omMMMMMMMMMMMMNmdmmmmddhhy/'    
 omMMMMMMMMMMMNhhyyyohmdddhhhdo'    
.ydMMMMMMMMMMdhs++so/smdddhhhhdm+'    
 oyhdmNMMMMMMMNdyooydmddddhhhhyhNd.    
  :oyhhdNNMMMMMMMNNNmmdddhhhhhyymMh    
    .:+sydNMMMMMNNNmmmdddhhhhhhmMmy    
       /mMMMMMMNNNmmmdddhhhhhmMNhs:    
    'oNMMMMMMMNNNmmmddddhhdmMNhs+'    
  'sNMMMMMMMMNNNmmmdddddmNMmhs/.    
 /NMMMMMMMMNNNNmmmdddmNMNdso:'    
+MMMMMMMNNNNNmmmmdmNMNdso/-    
yMMNNNNNNNmmmmmNNMmhs+/-'    
/hMMNNNNNNNNMNdhs++/-'    
'/ohdmmddhys+++/:.'    
  '-//////:--.

gqt@gentoo-linux
----------------
OS: Gentoo 2.15 x86_64
Host: github.io
Uptime: ${timeSince2003()}
Display: ${window.innerWidth}x${window.innerHeight}
User: Ara (she/her)
Github: https://github.com/agqt
Email: gqt@cumallover.me

Type 'help' for a list of commands.
`

function intro() {
    switch (vertical()) {
        case (true):
            return(intro_vert)
        case (false):
            return(intro_hor)
    }
}

jQuery(function($, undefined) {
    $('#term').terminal({
        neofetch: function() {
            this.echo(intro())
        },
help: function() {
	this.echo(`Site-Specific:
	help: Shows this output
	about: About me!
	name: Why Ara?
	skills: List of things I have experience with
	riscv: RISC-V devblog with monthly updates
	contact: Displays contact information
JQueryTerminal:
	neofetch: Display neofetch
	clear: Clears the display`)
},
about: function() {
            this.echo(`Hi! I'm Ara (she/her)

I'm a 22-year-old transgirl from France/Italy. I have a BSc. in Physics from Georgia Tech ('25). 
At my time there, I worked for 1.5 years as an undergraduate researcher at the Complex Rheology and Biomechanics Lab.
I'm well-versed in MATLAB/GNU Octave, having made plenty of projects for classes/research/personal projects, some of which I will rewrite to be compatible with GNU Octave and upload to my github over time.
I am also proud to be part of the RISC-V Devboards Program, working on expanding RISC-V support for Gentoo Linux packages.
I have a passion for computers and have mained Gentoo Linux with OpenRC since mid 2024. You'll usually find me active in online Gentoo communities under the usernames "gqt/sikeotic", or filing bug reports for ebuilds.

My outright favorite show is House MD and I've rewatched it a bunch of times. If you like it too, there's a good chance we'll get along.

I mainly play Cyberpunk 2077, Counter Strike, Starbound, Minecraft, and indie games like Rain World, BoI Rebirth, or NSO.

If you would like to contact me for some reason, feel free to reach out at gqt@cumallover.me

Engaged to Jordan <3

Current projects:
Rewriting heart area tracking program made in PoLS lab for GNU Octave.
(RISC-V Devboards Program) RISC-V architecture testing of Gentoo Linux packages with patches.

Past projects:
(NSF Grant) Georgia Tech, 2023-2024: Selective-Plane Illumination Microscopy via UV Excitation of Phenylcoumarone Structures in Rice Roots.
Georgia Tech, 2023: Rheology of Electropermanent Magnets and Magnetic Interpenetrating Materials.
ISKL, 2020: An Exploration on the Inclination of Supersonic Object Fronts and Shock Wave Angulation.
Gulcicek Kimya, 2019: Temporal Evaporation Profiles of Individual Aroma Substance in Fragrance Formulations from Pellicular Materials.
`)
        },
riscv: function() {
	this.echo(`RISC-V Development Blog
=======================
2025-04-10:
Being stuck on RISC-V, I've made some GRUB patches to enable loading of devicetree maps for arm64 that allowed me to make a custom install working on my arm machine's native hardware (Yoga Slim 7x).
Had to copy over the proprietary firmware from W*ndows, but I don't see this being an issue with the open-source nature of RISC-V. Once I am back in France, I will be much more active on RISC-V projects.

2024-10-19:
The RISC-V Lichee Pi 4A board finally arrived after getting approved for the RISC-V development program. I have yet to be able to put Gentoo on it, but some have had success using a custom kernel and U-Boot.
I will try that and report on package testing once I have more time. I plan to use dwm with x11 for minimal resource use.`)
	},
name: function() {
	this.echo(`Ara (pronunciation: a-ra (italian), ah-ruh (anglicized) (please forgive me idk IPA))

I get asked a lot about the meaning of my name or why I picked it.
'Ara' is a name I've used online since, as far as I can tell, October 2020 (pandemic gave me the time to dig into my gender identity).

It was actually chosen by an online friend with whom I played Elsword with for some time.
We were thinking of potential names, and when she went through the list and found Ara Haan (韓艾拉 / Hán Àilā), we both knew it immediately fit.
Being from Naples, Italy, the name Ara/Araceli was given to girls up to about several decades ago and means 'altar' in Latin, with a common Spanish name Araceli being 'the altar in heaven'.
I wasn't feeling religious vibes (and I'm also not Spanish lol), so I decided to just stick with 'Ara' rather than 'Araceli,' and plus:

		"ara is a bloat-free suckless name" - anonymous dwm user
  
There is probably something smart to be said here about linking Elsword with ancient Roman altars of heaven, but I'm too lazy to find it :P`)
},
skills: function() {
	this.echo(`Laboratory:
	Optomechanics, GC-MS, image/video analysis (ImageJ/MATLAB scripts), selective-plane illumination microscopy, sterilization (flow hoods/autoclave), photonics, fluorescent staining,
	motion/area tracking, 3D printing, confocal microscopy, data processing, circuitry.
Computing:
	OpenSSH, MATLAB, Fusion 360, GNU Octave, PASCO, LaTeX, Linux (Gentoo/Fedora/Ubuntu), GNU Coreutils, Emulation, ImageJ, DLTdv8, Arduino, C++, kernel configuration,
	HTML, CSS, LAMMPS, Google Compute Engine, CAD, git, Raspberry Pi, RISC-V Devboards, servers.
Corporate:
	LibreOffice, MS Office, Outlook, Excel, Google Suite.`)
	},
contact: function() {
	this.echo(`Private Email: gqt@cumallover.me`)
        },
        hug: function() {
            this.echo("*hugs* <3")
        },
	hugs: function() {
            this.echo("*hugs* <3")
        },
	jordan: function() {
		this.echo("<333")
	},
        trans: function() {
                this.echo("rights!")
        }
}, {
        prompt: ':3 ~> ',
        greetings: intro(),
        checkArity: false
    });
});
