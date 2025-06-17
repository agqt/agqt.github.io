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
 oyhdmNMMMMMMMNdyooydmddddhhhhyhNd.    User: ara/gqt
  :oyhhdNNMMMMMMMNNNmmdddhhhhhyymMh    Github: https://github.com/agqt
    .:+sydNMMMMMNNNmmmdddhhhhhhmMmy
       /mMMMMMMNNNmmmdddhhhhhmMNhs:    Type 'help' for a list of commands.
    'oNMMMMMMMNNNmmmddddhhdmMNhs+'
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
User: ara/gqt
Github: https://github.com/agqt

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
	riscv: RISC-V devblog with monthly updates
JQueryTerminal:
	neofetch: Display neofetch
	clear: Clears the display`)
},
about: function() {
            this.echo(`Hi! I'm Ara (she/her)

I'm a 22-year-old transgirl from France/Italy. I have a Bachelor's in Physics with Highest Honors from Georgia Tech. 
At my time there, I worked for 1.5 years as an undergraduate researcher at the Complex Rheology and Biomechanics Lab.
I'm well-versed in MATLAB/GNU Octave, having made plenty of projects for classes/research/personal projects, some of which I will rewrite to be compatible with GNU Octave and upload to my github over time.
I am also proud to be part of the RISC-V Devboards Program, working on expanding RISC-V support for Gentoo Linux packages.
I have a passion for computers and have mained Gentoo Linux with OpenRC since mid 2024. You'll usually find me active in online Gentoo communities under the username "gqt", or filing bug reports for ebuilds.

My outright favorite show is House MD and I've rewatched it a bunch of times. I'm also a big fan of Arcane (not a League player I swear).

I've sunk hundreds/thousands of hours into Counter Strike, Minecraft, and Cyberpunk 2077, and I'm also a fan of Guilty Gear Strive and indie games like Rain World/NSO.

Engaged to Jordan <3

Current projects:
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
2025-06-17:
I have currently got the base XFCE system to work using Debian and I am using that to install Gentoo using a simple chroot, as the Debian is on an onboard eMMC. I've attached an external microSD card to be used as the root storage, and plan to mount a dedicated separate USB that just handles /var and /home, for write speed reasons. The onboard eMMC has a /boot partition of only 500 MB, which isn't much for having a dozen or so initramfs files and other boot related files. I would rather use the convenient physical switches to switch boot from eMMC to the microSD port, and won't have to worry about different devicetree binaries taking up too much space, or OS Prober. I wouldn't be risking corrupting data on the base system, which is crucial as a backup in the case of any kernel panic/boot failures to maintain the integrity of the original system. I will have to manually migrate the firmware from Debian to Gentoo, which should be no problem.

In the future, I may want to work with U-Boot devs to directly support the Lichee Pi 4A.

2025-04-10:
The RISC-V Lichee Pi 4A board finally arrived after getting approved for the RISC-V development program. I have yet to be able to put Gentoo on it, but some have had success using a custom kernel and U-Boot.
I will try that and report on package testing once I have more time. I plan to use dwm with x11 for minimal resource use. I've made some GRUB patches to enable loading of devicetree maps for arm64 that allowed me to make a custom install working on my arm machine's native hardware (Yoga Slim 7x).
Had to copy over the proprietary firmware from W*ndows, but I don't see this being an issue with the open-source nature of RISC-V. Once I am back in France, I will be much more active on RISC-V projects.
`)
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
