function vertical() {return(window.innerWidth < 1242)}
function timeSince2003() {
    const diff = new Date() - new Date(2003, 2, 21);
/*    const years = Math.floor(diff / 31536000000);
    const months = Math.floor((diff % 31536000000) / 2628000000);
    const days = Math.floor(((diff % 31536000000) % 2628000000) / 86400000); */
	const days = Math.floor(diff / 86400000);
    return `${days} days`;
/*	return `${years} years, ${months} months, ${days} days`; */
};
intro_hor = `
         -/oyddmdhs+:.                 gqt@gentoo-linux
     -odNMMMMMMMMNNmhy+-'              ----------------
   -yNMMMMMMMMMMMNNNmmdhy+-            OS: Gentoo 2.15 x86_64
 'omMMMMMMMMMMMMNmdmmmmddhhy/'         Host: github.io
 omMMMMMMMMMMMNhhyyyohmdddhhhdo'       Uptime: ${timeSince2003()}
.ydMMMMMMMMMMdhs++so/smdddhhhhdm+'     Display: ${window.innerWidth}x${window.innerHeight}
 oyhdmNMMMMMMMNdyooydmddddhhhhyhNd.    Github: https://github.com/agqt
  :oyhhdNNMMMMMMMNNNmmdddhhhhhyymMh    Discord: gqt
    .:+sydNMMMMMNNNmmmdddhhhhhhmMmy    
       /mMMMMMMNNNmmmdddhhhhhmMNhs:    Type help for a list of commands.
    'oNMMMMMMMNNNmmmddddhhdmMNhs+'    
  'sNMMMMMMMMNNNmmmdddddmNMmhs/.    
 /NMMMMMMMMNNNNmmmdddmNMNdso:'    
+MMMMMMMNNNNNmmmmdmNMNdso/-    
yMMNNNNNNNmmmmmNNMmhs+/-'    
/hMMNNNNNNNNMNdhs++/-'    
'/ohdmmddhys+++/:.'    
  '-//////:--.
`

intro_vert = `
         -/oyddmdhs+:.    
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
Github: https://github.com/agqt
Discord: gqt

Type help for a list of commands.
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
	about: Plain-text 'About Me'
	contact: Displays contact information
JQueryTerminal:
	neofetch: Display neofetch
	clear: Clears the display`)
},
about: function() {
            this.echo(`Hi! I'm Ara (she/her)

I'm a 21-year-old poly transgirl from France/Italy/USA/Croatia (quadruple citizenship :3)
I speak French, English, and Italian, and I'm a 4th-year physics major at the Georgia Institute of Technology.
I also work as an undergraduate researcher at the Complex Rheology and Biomechanics Lab.

Current projects:
Selective-Plane Illumination Microscopy via UV Excitation of Phenylcoumarone Structures in Rice Roots.
Rewriting heart area tracking program made in PoLS lab for GNU Octave.`)
        },
        contact: function() {
            this.echo(`	Email: agqt@proton.me
	Discord: gqt (non-mutual friend requests: enabled)`)
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
	windogs: function() {
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
