import {MILLISECONDS_DAY} from './constants';

const EVENTS = [
    {
      id: 1,
      title: 'Managed intangible strategy',
      description: 'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      start: '4:00 PM',
      hours: 1,
      dayDelta: -1,
      color: 'canary'
    }, {
      id: 2,
      title: 'Multi-channelled grid-enabled paradigm',
      description: 'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
      start: '7:00 AM',
      hours: 1,
      dayDelta: -3,
      color: 'rose'
    }, {
      id: 3,
      title: 'Optional clear-thinking approach',
      description: 'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
      start: '10:00 AM',
      hours: 1,
      dayDelta: 1,
      color: 'sky'
    }, {
      id: 4,
      title: 'Decentralized system-worthy hardware',
      description: 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
      start: '8:00 PM',
      hours: 1,
      dayDelta: 2,
      color: 'canary'
    }, {
      id: 5,
      title: 'Grass-roots intangible standardization',
      description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.',
      start: '6:00 PM',
      hours: 1,
      dayDelta: 0,
      color: 'sky'
    }, {
      id: 6,
      title: 'Operative analyzing software',
      description: 'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
      start: '7:00 AM',
      hours: 1,
      dayDelta: -5,
      color: 'rose'
    }, {
      id: 7,
      title: 'Front-line multi-tasking benchmark',
      description: 'Maecenas pulvinar lobortis est.',
      start: '3:00 PM',
      hours: 1,
      dayDelta: -4,
      color: 'canary'
    }, {
      id: 8,
      title: 'Integrated real-time array',
      description: 'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
      start: '6:00 PM',
      hours: 1,
      dayDelta: 4,
      color: 'shamrock'
    }, {
      id: 9,
      title: 'Business-focused tangible synergy',
      description: 'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
      start: '2:00 PM',
      hours: 1,
      dayDelta: 4,
      color: 'sky'
    }, {
      id: 10,
      title: 'Business-focused discrete infrastructure',
      description: 'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
      start: '12:00 PM',
      hours: 1,
      dayDelta: -1,
      color: 'canary'
    }, {
      id: 11,
      title: 'Secured motivating middleware',
      description: 'Aliquam erat volutpat. In congue. Etiam justo.',
      start: '12:00 PM',
      hours: 1,
      dayDelta: 5,
      color: 'rose'
    }, {
      id: 12,
      title: 'Implemented web-enabled secured line',
      description: 'In eleifend quam a odio. In hac habitasse platea dictumst.',
      start: '8:00 AM',
      hours: 1,
      dayDelta: -1,
      color: 'rose'
    }, {
      id: 13,
      title: 'Persistent tangible conglomeration',
      description: 'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
      start: '12:00 PM',
      hours: 1,
      dayDelta: -2,
      color: 'sky'
    }, {
      id: 14,
      title: 'Right-sized non-volatile infrastructure',
      description: 'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      start: '8:00 AM',
      hours: 1,
      dayDelta: 1,
      color: 'rose'
    }, {
      id: 15,
      title: 'Assimilated dynamic framework',
      description: 'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
      start: '3:00 PM',
      hours: 1,
      dayDelta: 4,
      color: 'sky'
    }, {
      id: 16,
      title: 'Grass-roots static toolset',
      description: 'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
      start: '9:00 AM',
      hours: 1,
      dayDelta: 3,
      color: 'sky'
    }, {
      id: 17,
      title: 'Implemented actuating analyzer',
      description: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
      start: '2:00 PM',
      hours: 1,
      dayDelta: -5,
      color: 'rose'
    }, {
      id: 18,
      title: 'Multi-layered solution-oriented algorithm',
      description: 'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',
      start: '8:00 PM',
      hours: 1,
      dayDelta: 2,
      color: 'canary'
    }, {
      id: 19,
      title: 'Reactive clear-thinking emulation',
      description: 'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.',
      start: '7:00 AM',
      hours: 1,
      dayDelta: 2,
      color: 'rose'
    }, {
      id: 20,
      title: 'Team-oriented next generation solution',
      description: 'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
      start: '10:00 AM',
      hours: 1,
      dayDelta: 0,
      color: 'sky'
    }, {
      id: 21,
      title: 'Open-architected bifurcated budgetary management',
      description: 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
      start: '1:00 PM',
      hours: 1,
      dayDelta: 0,
      color: 'shamrock'
    }, {
      id: 22,
      title: 'Exclusive system-worthy extranet',
      description: 'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.',
      start: '8:00 PM',
      hours: 1,
      dayDelta: -2,
      color: 'sky'
    }, {
      id: 23,
      title: 'Expanded even-keeled system engine',
      description: 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
      start: '9:00 AM',
      hours: 1,
      dayDelta: -4,
      color: 'canary'
    }, {
      id: 24,
      title: 'Sharable client-server secured line',
      description: 'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
      start: '2:00 PM',
      hours: 1,
      dayDelta: 0,
      color: 'canary'
    }, {
      id: 25,
      title: 'Reduced regional initiative',
      description: 'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
      start: '5:00 PM',
      hours: 1,
      dayDelta: -4,
      color: 'shamrock'
    }, {
      id: 26,
      title: 'Organized systemic array',
      description: 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
      start: '9:00 AM',
      hours: 1,
      dayDelta: -3,
      color: 'shamrock'
    }, {
      id: 27,
      title: 'Cross-group multi-tasking service-desk',
      description: 'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
      start: '5:00 PM',
      hours: 1,
      dayDelta: -5,
      color: 'rose'
    }, {
      id: 28,
      title: 'Progressive client-server structure',
      description: 'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
      start: '12:00 PM',
      hours: 1,
      dayDelta: 4,
      color: 'rose'
    }, {
      id: 29,
      title: 'Enterprise-wide 24 hour hierarchy',
      description: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
      start: '9:00 AM',
      hours: 1,
      dayDelta: -4,
      color: 'rose'
    }, {
      id: 30,
      title: 'Integrated logistical ability',
      description: 'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.',
      start: '10:00 AM',
      hours: 1,
      dayDelta: -5,
      color: 'rose'
    }, {
      id: 31,
      title: 'Organized bi-directional throughput',
      description: 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
      start: '12:00 PM',
      hours: 1,
      dayDelta: -4,
      color: 'rose'
    }, {
      id: 32,
      title: 'Virtual bifurcated throughput',
      description: 'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
      start: '9:00 AM',
      hours: 1,
      dayDelta: 2,
      color: 'rose'
    }, {
      id: 33,
      title: 'Future-proofed tertiary policy',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
      start: '7:00 AM',
      hours: 1,
      dayDelta: -2,
      color: 'shamrock'
    }, {
      id: 34,
      title: 'Automated well-modulated data-warehouse',
      description: 'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
      start: '4:00 PM',
      hours: 1,
      dayDelta: -1,
      color: 'canary'
    }, {
      id: 35,
      title: 'Virtual eco-centric info-mediaries',
      description: 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
      start: '3:00 PM',
      hours: 1,
      dayDelta: 3,
      color: 'canary'
    }, {
      id: 36,
      title: 'Re-contextualized secondary architecture',
      description: 'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
      start: '8:00 AM',
      hours: 1,
      dayDelta: 3,
      color: 'rose'
    }, {
      id: 37,
      title: 'Innovative intangible hub',
      description: 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
      start: '2:00 PM',
      hours: 1,
      dayDelta: -2,
      color: 'sky'
    }, {
      id: 38,
      title: 'Adaptive bifurcated encoding',
      description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
      start: '4:00 PM',
      hours: 1,
      dayDelta: -5,
      color: 'rose'
    }, {
      id: 39,
      title: 'Enhanced interactive challenge',
      description: 'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
      start: '7:00 AM',
      hours: 1,
      dayDelta: -1,
      color: 'rose'
    }, {
      id: 40,
      title: 'Triple-buffered tangible product',
      description: 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
      start: '8:00 AM',
      hours: 1,
      dayDelta: -4,
      color: 'rose'
    }, {
      id: 41,
      title: 'Sharable needs-based moratorium',
      description: 'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
      start: '10:00 AM',
      hours: 1,
      dayDelta: 1,
      color: 'sky'
    }, {
      id: 42,
      title: 'De-engineered disintermediate functionalities',
      description: 'Nulla tempus.',
      start: '10:00 AM',
      hours: 1,
      dayDelta: 0,
      color: 'canary'
    }, {
      id: 43,
      title: 'Optimized real-time knowledge user',
      description: 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
      start: '12:00 PM',
      hours: 1,
      dayDelta: -5,
      color: 'canary'
    }, {
      id: 44,
      title: 'Advanced needs-based definition',
      description: 'Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
      start: '7:00 AM',
      hours: 1,
      dayDelta: 0,
      color: 'sky'
    }, {
      id: 45,
      title: 'Profound full-range encryption',
      description: 'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
      start: '7:00 AM',
      hours: 1,
      dayDelta: -1,
      color: 'shamrock'
    }, {
      id: 46,
      title: 'Customer-focused global artificial intelligence',
      description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
      start: '12:00 PM',
      hours: 1,
      dayDelta: -5,
      color: 'canary'
    }, {
      id: 47,
      title: 'Diverse background core',
      description: 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
      start: '4:00 PM',
      hours: 1,
      dayDelta: 4,
      color: 'rose'
    }, {
      id: 48,
      title: 'De-engineered systematic software',
      description: 'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
      start: '5:00 PM',
      hours: 1,
      dayDelta: 3,
      color: 'rose'
    }, {
      id: 49,
      title: 'Optimized motivating model',
      description: 'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
      start: '10:00 AM',
      hours: 1,
      dayDelta: -1,
      color: 'canary'
    }, {
      id: 50,
      title: 'Synergized foreground challenge',
      description: 'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
      start: '2:00 PM',
      hours: 1,
      dayDelta: -3,
      color: 'sky'
    }
];

const _genData = () => (
    EVENTS.map(({id, title, description, start, hours, dayDelta, color}) => {
        let dateOnDay = new Date(Date.now() + (dayDelta * MILLISECONDS_DAY));
        let year = dateOnDay.getFullYear();
        let month = dateOnDay.getMonth() + 1;
        let dayOfMonth = dateOnDay.getDate();
        let startDateTime = Date.parse(`${year}/${month}/${dayOfMonth} ${start}`);

        return {
            id,
            title,
            description,
            hours,
            color,
            start: startDateTime,
            dayDelta: dayDelta
        };
    })
);

export default _genData();
